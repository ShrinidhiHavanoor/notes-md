import { FC, useEffect, useState } from "react";
import axios from "axios";
import { Dice1, Edit, Trash } from "lucide-react";
import {
  TableHead,
  TableHeader,
  TableRow,
  Table,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
interface StudyResourceProps {}
const url = import.meta.env.VITE_APP_API_URL;

const StudyResource: FC<StudyResourceProps> = ({}) => {
  const [data, setData] = useState<any[]>([]);
  const [newD, setNewD] = useState<String>("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${url}/subject`);
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  });
  return (
    <div>
      <div className="flex w-full p-4 text-primary bg-secondary justify-between px-32">
        <h1 className="text-3xl font-bold  ring-offset-4 text-center">
          Subjects
        </h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="">New</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Subject</DialogTitle>
              <DialogDescription>
                <form className="flex flex-col gap-3">
                  <Input value={newD} type="text" placeholder="Eg:English" />
                  <Button className="" type="submit">
                    Submit
                  </Button>
                </form>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      <Table className="table-auto max-w-screen-md mx-auto">
        <TableHeader>
          <TableRow>
            <TableHead>Number</TableHead>
            <TableHead>Subjects</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell className="flex gap-2">
                <Button
                  onClick={async () => {
                    const deleteData = async (id: string) => {
                      try {
                        const res = await axios.delete(`${url}/subject/${id}`);
                      } catch (err) {
                        console.log(err);
                      }
                    };
                    deleteData(item._id);
                  }}
                  className="size-8"
                  variant={"destructive"}
                  size={"icon"}
                >
                  <Trash />
                </Button>
                <Button className="size-8" size={"icon"}>
                  <Edit />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default StudyResource;
