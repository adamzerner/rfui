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
      <Examples title="Size">
        <Stack class="gap-5">
          <Table>
            <thead>
              <tr>
                <th>name</th>
                <th>age</th>
                <th>city</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alice</td>
                <td>21</td>
                <td>Boston</td>
              </tr>
              <tr>
                <td>Bob</td>
                <td>27</td>
                <td>Seattle</td>
              </tr>
              <tr>
                <td>Carol</td>
                <td>39</td>
                <td>Arlington</td>
              </tr>
            </tbody>
          </Table>
        </Stack>
      </Examples>
    </Stack>
  );
};
