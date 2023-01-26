import { MigrationInterface, QueryRunner } from "typeorm";

export class default1674744740215 implements MigrationInterface {
    name = 'default1674744740215'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "task_tag" ("task_id" integer NOT NULL, "tag_id" integer NOT NULL, CONSTRAINT "PK_9bd1d11e72e0471503a8c07b5dd" PRIMARY KEY ("task_id", "tag_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_8a266d51df4605134aa122fbda" ON "task_tag" ("task_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_343faa365ee706cad6e13a3828" ON "task_tag" ("tag_id") `);
        await queryRunner.query(`ALTER TABLE "task_tag" ADD CONSTRAINT "FK_8a266d51df4605134aa122fbda1" FOREIGN KEY ("task_id") REFERENCES "tasks"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "task_tag" ADD CONSTRAINT "FK_343faa365ee706cad6e13a3828f" FOREIGN KEY ("tag_id") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task_tag" DROP CONSTRAINT "FK_343faa365ee706cad6e13a3828f"`);
        await queryRunner.query(`ALTER TABLE "task_tag" DROP CONSTRAINT "FK_8a266d51df4605134aa122fbda1"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_343faa365ee706cad6e13a3828"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8a266d51df4605134aa122fbda"`);
        await queryRunner.query(`DROP TABLE "task_tag"`);
    }

}
