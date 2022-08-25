import {
  BellIcon,
  CalendarIcon,
  ChatIcon,
  CheckIcon,
  DeleteIcon,
  EditIcon,
  TimeIcon,
} from "@chakra-ui/icons";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Portal,
  Box,
  Button,
  IconButton,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import type { Database } from "~/my-app";
import { useState } from "react";

type SquareState =
  | "月曜日"
  | "火曜日"
  | "水曜日"
  | "木曜日"
  | "金曜日"
  | "土曜日"
  | "日曜日"
  | number
  | null;

type Eventprops = {
  month: number;
  year: number;
  day: SquareState;
  setsavedata: React.Dispatch<React.SetStateAction<Database[]>>;
  savedata: Database[];
};

const stopPropagation = (event: React.MouseEvent<HTMLDivElement>) => {
  event.stopPropagation();
};

let sliceyear;
let slicemonth;
let sliceday;

const Data = (props: Eventprops) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [event, setEvent] = useState("");
  const [date, setDate] = useState("");
  const [starttime, setStarttime] = useState("");
  const [endtime, setEndtime] = useState("");
  const [eventmore, setEventmore] = useState("");

  let checknumber = 0;
  const del = () => {
    props.setsavedata(
      props.savedata.filter((same, index) => index !== checknumber)
    );
  };

  const handlesave = () => {
    onOpen;
    props.setsavedata([
      props.savedata[checknumber],
      {
        event: event,
        date: date,
        starttime: starttime,
        endtime: endtime,
        eventDetail: eventmore,
      },
    ]);
  };

  if (props.savedata === undefined) {
    return <></>;
  }
  const res = props.savedata.map((data, index) => {
    sliceyear = data.date.substring(0, 4);
    slicemonth = data.date.substring(7, 5);
    sliceday = data.date.substring(8);

    if (
      Number(sliceyear) === props.year &&
      Number(slicemonth) === props.month &&
      Number(sliceday) === Number(props.day)
    ) {
      checknumber = index;
      return (
        <div>
          <div onClick={stopPropagation}>
            <Popover isOpen={isOpen}>
              <PopoverTrigger>
                <button className="newevent" onClick={onOpen}>
                  {data.event}
                </button>
              </PopoverTrigger>
              <Portal>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverHeader>
                    予定の詳細
                    <Button
                      left="125px"
                      bottom="7px"
                      backgroundColor="white"
                      width="25px"
                      height="30px"
                      onClick={onClose}
                    >
                      <EditIcon></EditIcon>
                    </Button>
                    <Button
                      left="125px"
                      bottom="7px"
                      backgroundColor="white"
                      width="25px"
                      height="30px"
                      onClick={del}
                    >
                      <DeleteIcon
                        height="13px"
                        backgroundColor="white"
                      ></DeleteIcon>
                    </Button>
                  </PopoverHeader>
                  <PopoverCloseButton height="25px" width="30px" left="285px" />
                  <PopoverBody height="200px">
                    <BellIcon
                      position="relative"
                      width="20px"
                      height="20px"
                      left="5px"
                      top="5px"
                    ></BellIcon>
                    <Box
                      id="event"
                      position="relative"
                      left="50px"
                      bottom="17px"
                    >
                      {data.event}
                    </Box>

                    <CalendarIcon
                      position="relative"
                      width="15px"
                      height="15px"
                      top="3px"
                      left="8px"
                    ></CalendarIcon>
                    <Box
                      id="event"
                      position="relative"
                      left="50px"
                      bottom="17px"
                    >
                      {data.date}
                    </Box>

                    <TimeIcon
                      position="relative"
                      width="15px"
                      height="15px"
                      top="3px"
                      left="8px"
                    ></TimeIcon>
                    <Box
                      id="event"
                      position="relative"
                      left="50px"
                      bottom="17px"
                    >
                      {data.starttime}
                    </Box>
                    <Box
                      position="relative"
                      width="75px"
                      left="120px"
                      bottom="38px"
                    >
                      -
                    </Box>
                    <Box
                      id="event"
                      position="relative"
                      left="160px"
                      bottom="60px"
                    >
                      {data.endtime}
                    </Box>

                    <ChatIcon
                      position="relative"
                      width="15px"
                      height="15px"
                      bottom="40px"
                      left="8px"
                    ></ChatIcon>
                    <Box
                      id="event"
                      maxWidth="250px"
                      position="relative"
                      left="50px"
                      bottom="60px"
                    >
                      {data.eventDetail}
                    </Box>
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover>
          </div>
          {/* <Popover isOpen={isOpen}>
            <PopoverTrigger>
              <IconButton
                position="absolute"
                variant="outline"
                aria-label="Check"
                icon={<CheckIcon />}
                height="25px"
                width="25px"
                left="240px"
                top="5px"
                onClick={handlesave}
              />
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverArrow />
                <PopoverHeader>
                  予定の編集
                  <IconButton
                    position="absolute"
                    variant="outline"
                    aria-label="Check"
                    icon={<CheckIcon />}
                    height="25px"
                    width="25px"
                    left="240px"
                    top="5px"
                    onClick={handlesave}
                  />
                </PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody height="210px">
                  <Input
                    id="event"
                    defaultValue={data.event}
                    width="290px"
                    value={event}
                    onChange={(e) => setEvent(e.target.value)}
                  />

                  <Input
                    id="date"
                    type="date"
                    width="220px"
                    top="10px"
                    defaultValue={data.date}
                    value={date}
                    onChange={(e) => {
                      setDate(e.target.value);
                    }}
                  />

                  <Input
                    id="start-time"
                    type="time"
                    width="120px"
                    top="20px"
                    defaultValue={data.starttime}
                    value={starttime}
                    onChange={(e) => setStarttime(e.target.value)}
                  />
                  <Box position="relative" left="140px" bottom="12px">
                    ~
                  </Box>
                  <Input
                    id="end-time"
                    type="time"
                    width="120px"
                    bottom="41px"
                    left="170px"
                    defaultValue={data.endtime}
                    value={endtime}
                    onChange={(e) => setEndtime(e.target.value)}
                  />

                  <Input
                    id="date"
                    placeholder="memo"
                    width="290px"
                    bottom="30px"
                    defaultValue={data.eventDetail}
                    value={eventmore}
                    onChange={(e) => setEventmore(e.target.value)}
                  />
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover> */}
        </div>
      );
    } else {
      return <></>;
    }
  });

  if (res[checknumber] !== undefined) {
    return res[checknumber];
  }

  return <></>;
};

export default Data;
