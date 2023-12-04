import { Link } from "@/components/atoms/link.tsx";
import { Table } from "@/components/atoms/table.tsx";
import { Stack } from "@/components/helpers/stack.tsx";
import { Examples } from "@/islands/demo/examples.tsx";

export default () => {
  return (
    <Stack class="gap-8">
      <div>
        <div class="text-2xl mb-3">Source code</div>
        <Link href="https://github.com/adamzerner/rfui/blob/master/routes/atoms/table.tsx">
          https://github.com/adamzerner/rfui/blob/master/routes/atoms/table.tsx
        </Link>
      </div>
      <Examples title="Standard">
        <Table>
          <TableContent />
        </Table>
      </Examples>
      <Examples title="No border">
        <Table bordered={false}>
          <TableContent />
        </Table>
      </Examples>
      <Examples title="Striped">
        <Table striped bordered={false}>
          <TableContent />
        </Table>
      </Examples>
      <Examples title="Striped with border">
        <Table striped>
          <TableContent />
        </Table>
      </Examples>
    </Stack>
  );
};

const TableContent = () => {
  const users = [{
    name: "Alice",
    age: 21,
    city: "Boston",
    occupation: "Software Engineer",
    salary: "$120,000",
  }, {
    name: "Bob",
    age: 27,
    city: "Seattle",
    occupation: "Product Manager",
    salary: "$105,000",
  }, {
    name: "Carol",
    age: 39,
    city: "Arlington",
    occupation: "UX Researcher",
    salary: "$160,000",
  }, {
    name: "David",
    age: 41,
    city: "New York",
    occupation: "HR",
    salary: "$90,000",
  }, {
    name: "Emily",
    age: 25,
    city: "Portland",
    occupation: "QA Engineer",
    salary: "$60,000",
  }];

  return (
    <>
      <thead>
        <tr>
          <th>name</th>
          <th class="!text-right">age</th>
          <th>city</th>
          <th>occupation</th>
          <th class="!text-right">salary</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr>
            <td>{user.name}</td>
            <td class="!text-right">{user.age}</td>
            <td>{user.city}</td>
            <td>{user.occupation}</td>
            <td class="!text-right">{user.salary}</td>
          </tr>
        ))}
      </tbody>
    </>
  );
};
