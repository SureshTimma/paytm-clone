When using **Prisma with MongoDB**, you don’t use raw MongoDB commands (like `db.collection.find()`), but instead use **Prisma Client** methods in **TypeScript/JavaScript** to query your database.

Here are the **essential Prisma Client commands** you should know for basic querying and CRUD operations:

---

### 🔍 READ (Retrieve Data)

#### Get all records

```ts
const users = await prisma.user.findMany();
```

#### Get one record by unique field

```ts
const user = await prisma.user.findUnique({
  where: { id: "your-id-here" },
});
```

#### Filter records (e.g., users with name "Alice")

```ts
const users = await prisma.user.findMany({
  where: { name: "Alice" },
});
```

#### Select specific fields

```ts
const users = await prisma.user.findMany({
  select: {
    id: true,
    name: true,
  },
});
```

#### Include relations (e.g., posts of a user)

```ts
const users = await prisma.user.findMany({
  include: {
    posts: true,
  },
});
```

---

### ✏️ CREATE (Insert Data)

```ts
const newUser = await prisma.user.create({
  data: {
    name: "Alice",
    email: "alice@example.com",
  },
});
```

---

### 🛠️ UPDATE

#### Update by unique field

```ts
const updatedUser = await prisma.user.update({
  where: { id: "your-id-here" },
  data: { name: "New Name" },
});
```

---

### ❌ DELETE

#### Delete by unique field

```ts
const deletedUser = await prisma.user.delete({
  where: { id: "your-id-here" },
});
```

---

### 🔁 UPSERT (Update if exists, else create)

```ts
const user = await prisma.user.upsert({
  where: { email: "bob@example.com" },
  update: { name: "Updated Bob" },
  create: { name: "Bob", email: "bob@example.com" },
});
```

---

### 🧮 COUNT

```ts
const count = await prisma.user.count();
```

---

### 🔄 RAW QUERIES (optional, advanced)

Use MongoDB syntax **only** if absolutely necessary:

```ts
const rawUsers = await prisma.$queryRaw`db.user.find({})`; // Not common, use with caution
```

---

### Summary

| Operation         | Prisma Command                |
| ----------------- | ----------------------------- |
| Read all          | `findMany()`                  |
| Read one          | `findUnique()`                |
| Create            | `create()`                    |
| Update            | `update()`                    |
| Delete            | `delete()`                    |
| Upsert            | `upsert()`                    |
| Count             | `count()`                     |
| Include relations | `include: { relation: true }` |
| Select fields     | `select: { field: true }`     |

Let me know if you want examples for nested queries or filtering with operators like `contains`, `gt`, `lt`, etc.
