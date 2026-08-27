type ApiTableLabels = {
  component: string;
  defaultValue: string;
  description: string;
  name: string;
  type: string;
};

type ApiTableRow = {
  component: string;
  defaultValue: string | null;
  description: string;
  name: string;
  type: string;
};

export const ApiTable = ({
  labels,
  rows,
}: {
  labels: ApiTableLabels;
  rows: ApiTableRow[];
}) => (
  <div className="docs-api-table-wrap">
    <table className="docs-api-table">
      <thead>
        <tr>
          <th>{labels.component}</th>
          <th>{labels.name}</th>
          <th>{labels.type}</th>
          <th>{labels.defaultValue}</th>
          <th>{labels.description}</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={`${row.component}-${row.name}-${index}`}>
            <td>{row.component}</td>
            <td>
              <code>{row.name}</code>
            </td>
            <td>
              <code>{row.type}</code>
            </td>
            <td>
              {row.defaultValue == null ? '—' : <code>{row.defaultValue}</code>}
            </td>
            <td>{row.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
