import { Link } from "react-router-dom";

const users = [
  { id: 1, name: "Nguyễn Văn A", email: "nva@gmail.com", address: "Hà Nội" },
  { id: 2, name: "Nguyễn Văn B", email: "nvb@gmail.com", address: "Hà Nam" },
  { id: 3, name: "Nguyễn Văn C", email: "nvc@gmail.com", address: "Ninh Bình" },
];

export default function ListUser() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {users.map((u) => (
        <div key={u.id} style={{ border: "1px solid gray", padding: "10px" }}>
          <p>Id: {u.id}</p>
          <p>UserName: {u.name}</p>
          <p>Email: {u.email}</p>
          <p>Address: {u.address}</p>
          <Link to={`/bai6/user/${u.id}`}>Xem chi tiết</Link>
        </div>
      ))}
    </div>
  );
}
