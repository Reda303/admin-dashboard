import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img className="widgetLgImg" src="../../assets/pfp/8.jpeg" alt="" />
            <span className="widgetLgName">Sarah Baker</span>
          </td>
          <td className="widgetLgDate">2 Jan 2024</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img className="widgetLgImg" src="../../assets/pfp/5.jpeg" alt="" />
            <span className="widgetLgName">Hellen Keller</span>
          </td>
          <td className="widgetLgDate">15 Nov 2024</td>
          <td className="widgetLgAmount">$80.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img className="widgetLgImg" src="../../assets/pfp/3.jpeg" alt="" />
            <span className="widgetLgName">Anna Trunks</span>
          </td>
          <td className="widgetLgDate">21 Aug 2023</td>
          <td className="widgetLgAmount">$360.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img className="widgetLgImg" src="../../assets/pfp/7.jpeg" alt="" />
            <span className="widgetLgName">Carl Jhonson</span>
          </td>
          <td className="widgetLgDate">21 Aug 2022</td>
          <td className="widgetLgAmount">$150.00</td>
          <td className="widgetLgStatus">
            <Button type="Rejected" />
          </td>
        </tr>

      </table>
    </div>
  );
}
