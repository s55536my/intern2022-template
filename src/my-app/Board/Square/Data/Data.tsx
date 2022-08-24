import {
  BellIcon,
  CalendarIcon,
  ChatIcon,
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
} from "@chakra-ui/react";
import type { Database } from "~/my-app";

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

const Data = (props: Eventprops) => {
  if (props.savedata.length < 0) {
    return <></>;
  }
  for (let i = 0; i < props.savedata.length; i++) {
    const sliceyear = props.savedata[i].date.substring(0, 4);
    const slicemonth = props.savedata[i].date.substring(7, 5);
    const sliceday = props.savedata[i].date.substring(8);

    if (
      Number(sliceyear) === props.year &&
      Number(slicemonth) === props.month &&
      Number(sliceday) === props.day &&
      i > 0
    ) {
      return (
        <div onClick={stopPropagation}>
          <Popover>
            <PopoverTrigger>
              <button className="newevent">{props.savedata[i].event}</button>
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
                  >
                    <EditIcon height="13px" backgroundColor="white"></EditIcon>
                  </Button>
                  <Button
                    left="125px"
                    bottom="7px"
                    backgroundColor="white"
                    width="25px"
                    height="30px"
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
                  <Box id="event" position="relative" left="50px" bottom="17px">
                    {props.savedata[i].event}
                  </Box>

                  <CalendarIcon
                    position="relative"
                    width="15px"
                    height="15px"
                    top="3px"
                    left="8px"
                  ></CalendarIcon>
                  <Box id="event" position="relative" left="50px" bottom="17px">
                    {props.savedata[i].date}
                  </Box>

                  <TimeIcon
                    position="relative"
                    width="15px"
                    height="15px"
                    top="3px"
                    left="8px"
                  ></TimeIcon>
                  <Box id="event" position="relative" left="50px" bottom="17px">
                    {props.savedata[i].starttime}
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
                    {props.savedata[i].endtime}
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
                    {props.savedata[i].eventDetail}
                  </Box>
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover>
        </div>
      );
    } else {
      return <></>;
    }
  }
};

export default Data;
