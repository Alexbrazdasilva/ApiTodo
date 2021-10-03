import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class Notes1633201118264 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'notes',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            generationStrategy: 'uuid',
            isGenerated: true,
          },
          {
            name: 'title',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'tag',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'author',
            type: 'varchar',
          },
          {
            name: 'creationDate',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
      true
    )
    await queryRunner.createForeignKey(
      'notes',
      new TableForeignKey({
        columnNames: ['author'],
        referencedTableName: 'users',
        referencedColumnNames: ['id']
      }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('notes')
  }
}
