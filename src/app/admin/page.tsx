import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const page = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <CardModel title="hh" subtitles="fff" body="ddd" />
      <CardModel title="ff" subtitles="ii" body="ll" />
      <CardModel title="gg" subtitles="hh" body="pp" />
    </div>
  );
};
export default page;

type DashboardCardProps = {
  title: string;
  subtitles: string;
  body: string;
};
const CardModel = ({ title, subtitles, body }: DashboardCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitles}</CardDescription>
      </CardHeader>
      <CardContent>{body}</CardContent>
    </Card>
  );
};
