import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Progress } from "antd";

function editStudent(record) {
  console.log("Edit student:", record);
}

function deleteStudent(record) {
  console.log("Delete student:", record);
}

const columns = [
  {
    title: "Full Name",
    dataIndex: "name",
  },
  {
    title: "Date of Birth",
    dataIndex: "dateOfBirth",
    sorter: (a, b) => new Date(a.dateOfBirth) - new Date(b.dateOfBirth),
  },
  {
    title: "Telegram ID",
    dataIndex: "telegramID",
    sorter: (a, b) => a.telegramID.localeCompare(b.telegramID),
  },
  {
    title: "Course",
    dataIndex: "course",
    sorter: (a, b) => a.course.localeCompare(b.course),
  },
  {
    title: "Group",
    dataIndex: "group",
    sorter: (a, b) => a.group.localeCompare(b.group),
  },
  {
    title: "Active",
    dataIndex: "active",
    render: (value) => (
      <Progress
        percent={value}
        size="small"
        status={value === 100 ? "success" : value === 0 ? "exception" : "active"}
      />
    ),
  },
  {
    title: "Phone Number",
    dataIndex: "phoneNumber",
    sorter: (a, b) => a.phoneNumber.localeCompare(b.phoneNumber),
  },
  {
    title: "Actions",
    dataIndex: "actions",
    render: (_, record) => (
      <div>
        <Button
          type="primary"
          shape="circle"
          onClick={() => editStudent(record)}
        >
          <EditOutlined />
        </Button>
        &nbsp;
        <Button
          type="primary"
          shape="circle"
          danger
          onClick={() => deleteStudent(record)}
        >
          <DeleteOutlined />
        </Button>
      </div>
    ),
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    dateOfBirth: "2000-05-12",
    telegramID: "@john_brown",
    course: "Frontend",
    group: "Group A",
    active: 100,
    phoneNumber: "+998901112233",
  },
  {
    key: "2",
    name: "Jim Green",
    dateOfBirth: "1999-08-22",
    telegramID: "@jim_green",
    course: "Backend",
    group: "Group B",
    active: 70,
    phoneNumber: "+998902223344",
  },
  {
    key: "3",
    name: "Alice Johnson",
    dateOfBirth: "2001-02-17",
    telegramID: "@alice_j",
    course: "UI/UX",
    group: "Group C",
    active: 40,
    phoneNumber: "+998903334455",
  },
  {
    key: "4",
    name: "Michael Smith",
    dateOfBirth: "2002-01-05",
    telegramID: "@m_smith",
    course: "Frontend",
    group: "Group A",
    active: 90,
    phoneNumber: "+998904445566",
  },
  {
    key: "5",
    name: "Sarah Williams",
    dateOfBirth: "1998-07-19",
    telegramID: "@sarah_w",
    course: "Backend",
    group: "Group B",
    active: 0,
    phoneNumber: "+998905556677",
  },
  {
    key: "6",
    name: "David Lee",
    dateOfBirth: "2000-11-23",
    telegramID: "@davidlee",
    course: "Mobile",
    group: "Group D",
    active: 60,
    phoneNumber: "+998906667788",
  },
  {
    key: "7",
    name: "Emma Davis",
    dateOfBirth: "2001-03-29",
    telegramID: "@emma_d",
    course: "UI/UX",
    group: "Group C",
    active: 100,
    phoneNumber: "+998907778899",
  },
  {
    key: "8",
    name: "Robert Wilson",
    dateOfBirth: "1997-12-14",
    telegramID: "@robertw",
    course: "Frontend",
    group: "Group A",
    active: 50,
    phoneNumber: "+998908889900",
  },
  {
    key: "9",
    name: "Olivia Taylor",
    dateOfBirth: "2003-06-02",
    telegramID: "@olivia_t",
    course: "Backend",
    group: "Group B",
    active: 80,
    phoneNumber: "+998909991122",
  },
  {
    key: "10",
    name: "James Anderson",
    dateOfBirth: "1999-09-09",
    telegramID: "@james_a",
    course: "Mobile",
    group: "Group D",
    active: 100,
    phoneNumber: "+998901223344",
  },
];




export { columns, data };