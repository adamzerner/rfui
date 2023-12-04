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
      <Examples title="Striped">
        <Table striped>
          <TableContent />
        </Table>
      </Examples>
    </Stack>
  );
};

const TableContent = () => (
  <>
    <thead>
      <tr>
        <th>name</th>
        <th>age</th>
        <th>city</th>
        <th>occupation</th>
        <th>salary</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Alice</td>
        <td>21</td>
        <td>Boston</td>
        <td>Software Engineer</td>
        <td>$120k</td>
      </tr>
      <tr>
        <td>Bob</td>
        <td>27</td>
        <td>Seattle</td>
        <td>Product Manager</td>
        <td>$105k</td>
      </tr>
      <tr>
        <td>Carol</td>
        <td>39</td>
        <td>Arlington</td>
        <td>UX Researcher</td>
        <td>$160k</td>
      </tr>
      <tr>
        <td>David</td>
        <td>41</td>
        <td>New York</td>
        <td>HR</td>
        <td>$90k</td>
      </tr>
      <tr>
        <td>Emily</td>
        <td>25</td>
        <td>Portland</td>
        <td>QA Engineer</td>
        <td>$60k</td>
      </tr>
    </tbody>
  </>
);
