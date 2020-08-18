# Migration `20200818032958-initial-migration`

This migration has been generated at 8/17/2020, 11:29:58 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "User" (
"id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
"name" TEXT NOT NULL,
"email" TEXT NOT NULL,
"picture" TEXT ,
"jobTitle" TEXT )

CREATE TABLE "Post" (
"id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
"question" TEXT NOT NULL,
"description" TEXT NOT NULL,
"language" TEXT ,
"authorId" INTEGER NOT NULL,
"likes" INTEGER ,
"comments" TEXT ,
"views" INTEGER ,
FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
)

CREATE UNIQUE INDEX "Post_authorId" ON "Post"("authorId")

PRAGMA foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200818032958-initial-migration
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,32 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource sqlite {
+  provider = "sqlite"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model User {
+  id Int @id @default(autoincrement())
+  name String
+  email String
+  posts Post?
+  picture String?
+  jobTitle String?
+}
+
+model Post {
+  id Int @id @default(autoincrement())
+  question String
+  description String
+  language String?
+  author User @relation(fields: [authorId], references: [id])
+  authorId Int 
+  likes Int?
+  comments String?
+  views Int?
+}
```


