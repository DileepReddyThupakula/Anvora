"""initial_schema

Revision ID: 0001_initial_schema
Revises: 
Create Date: 2026-07-22 19:50:00.000000

"""
from typing import Sequence, Union
from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic.
revision: str = '0001_initial_schema'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # Create settings table
    op.create_table(
        'settings',
        sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
        sa.Column('theme', sa.String(length=32), server_default='executive-dark', nullable=False),
        sa.Column('default_workspace', sa.String(length=64), server_default='Anvora Capital', nullable=False),
        sa.Column('active_persona', sa.String(length=64), server_default='Chief Executive Officer', nullable=False),
        sa.Column('telemetry_poll_rate_ms', sa.Integer(), server_default='5000', nullable=False),
        sa.Column('auto_start_ollama', sa.Boolean(), server_default='1', nullable=False),
        sa.Column('updated_at', sa.DateTime(timezone=True), server_default=sa.text('CURRENT_TIMESTAMP'), nullable=False),
        sa.PrimaryKeyConstraint('id')
    )

    # Create telemetry_logs table
    op.create_table(
        'telemetry_logs',
        sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
        sa.Column('cpu_usage_percent', sa.Float(), nullable=False),
        sa.Column('memory_used_mb', sa.Integer(), nullable=False),
        sa.Column('ollama_status', sa.String(length=16), nullable=False),
        sa.Column('active_branch', sa.String(length=64), nullable=False),
        sa.Column('recorded_at', sa.DateTime(timezone=True), server_default=sa.text('CURRENT_TIMESTAMP'), nullable=False),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_index('ix_telemetry_logs_recorded_at', 'telemetry_logs', ['recorded_at'], unique=False)

    # Insert default seed record into settings table
    op.execute(
        "INSERT INTO settings (id, theme, default_workspace, active_persona, telemetry_poll_rate_ms, auto_start_ollama, updated_at) "
        "VALUES (1, 'executive-dark', 'Anvora Capital', 'Chief Executive Officer', 5000, 1, CURRENT_TIMESTAMP)"
    )


def downgrade() -> None:
    op.drop_index('ix_telemetry_logs_recorded_at', table_name='telemetry_logs')
    op.drop_table('telemetry_logs')
    op.drop_table('settings')
