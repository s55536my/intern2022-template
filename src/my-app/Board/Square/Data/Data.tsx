import { CheckIcon, DeleteIcon, Icon, EditIcon } from "@chakra-ui/icons";

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
  Stack,
  HStack,
} from "@chakra-ui/react";

import type { Database, SquareState } from "~/my-app";
import { useState } from "react";
import { BsFonts, BsCardText } from "react-icons/bs";
import { RiCalendar2Fill } from "react-icons/ri";
import { BiTime } from "react-icons/bi";

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
  const [check, setCheck] = useState(true);
  const [event, setEvent] = useState("");
  const [date, setDate] = useState("");
  const [starttime, setStarttime] = useState("");
  const [endtime, setEndtime] = useState("");
  const [eventmore, setEventmore] = useState("");

  let checknum = 0;

  //年、月、日がヒットした場合データを入れた新しい配列の作成
  const a = props.savedata.filter((da, ii) => {
    sliceyear = da.date.substring(0, 4);
    slicemonth = da.date.substring(7, 5);
    sliceday = da.date.substring(8);

    if (
      Number(sliceyear) === props.year &&
      Number(slicemonth) === props.month &&
      Number(sliceday) === Number(props.day)
    ) {
      da.position = ii;
      checknum = checknum + 1;
      return da;
    }
  });

  //filterをもとにヒットしたものをポップオーバー表示に変更する部分
  const res = a.map((data) => {
    const chenge = () => {
      setCheck(false);
      setEvent(data.event);
      setDate(data.date);
      setStarttime(data.starttime);
      setEndtime(data.endtime);
      setEventmore(data.eventDetail);
    };

    //予定編集か詳細かを判別する用
    const chenge2 = () => {
      setCheck(true);
    };

    //入力データ保存用(予定編集)
    const handlesave = () => {
      props.setsavedata(
        props.savedata.map((add, index) =>
          index === data.position
            ? {
                event: event,
                date: date,
                starttime: starttime,
                endtime: endtime,
                eventDetail: eventmore,
                position: 0,
              }
            : add
        )
      );
    };

    //予定削除用
    const del = () => {
      props.setsavedata(
        props.savedata.filter((same, index) => index !== data.position)
      );
    };

    return (
      //「key」を渡す必要あり
      <div key={data.position} onClick={stopPropagation}>
        <Popover onClose={chenge2} placement="right">
          <PopoverTrigger>
            <button className="newevent">{data.event}</button>
          </PopoverTrigger>
          <Portal>
            {check ? (
              <PopoverContent>
                <PopoverArrow />
                <PopoverHeader height="40px">
                  予定の詳細
                  <Button
                    left="125px"
                    bottom="7px"
                    backgroundColor="white"
                    width="25px"
                    height="30px"
                    onClick={chenge}
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
                <PopoverBody>
                  <Stack spacing={4}>
                    <HStack>
                      <Icon w={6} h={6} as={BsFonts}></Icon>
                      <Box maxWidth="270px" id="event">
                        {data.event}
                      </Box>
                    </HStack>

                    <HStack spacing={2}>
                      <Icon w={6} h={5} as={RiCalendar2Fill}></Icon>
                      <Box id="event">{data.date}</Box>
                    </HStack>

                    <HStack spacing={2}>
                      <Icon w={6} h={5} as={BiTime}></Icon>
                      <Box>{data.starttime}</Box>
                      <Box>~</Box>
                      <Box>{data.endtime}</Box>
                    </HStack>

                    <HStack spacing={2}>
                      <Icon w={6} h={5} as={BsCardText}></Icon>
                      <Box maxWidth="270px">{data.eventDetail}</Box>
                    </HStack>
                  </Stack>
                </PopoverBody>
              </PopoverContent>
            ) : (
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
                    onClick={() => {
                      handlesave(), chenge2();
                    }}
                  />
                </PopoverHeader>
                <PopoverCloseButton onClick={chenge2} />
                <PopoverBody height="210px">
                  <Input
                    id="event"
                    value={event}
                    width="290px"
                    onChange={(e) => setEvent(e.target.value)}
                  />

                  <Input
                    id="date"
                    type="date"
                    width="220px"
                    top="10px"
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
                    value={endtime}
                    onChange={(e) => setEndtime(e.target.value)}
                  />

                  <Input
                    id="date"
                    placeholder="memo"
                    width="290px"
                    bottom="30px"
                    value={eventmore}
                    onChange={(e) => setEventmore(e.target.value)}
                  />
                </PopoverBody>
              </PopoverContent>
            )}
          </Portal>
        </Popover>
      </div>
    );
  });

  // console.log(props.day);
  // console.log(res.length);

  // console.log(new_res.length);

  if (props.savedata === undefined) {
    return <></>;
  }

  if (res.length > 0) {
    return (
      <>
        {res.map((result, i) => (
          //「key」を渡す必要あり
          <div className="event" key={i}>
            {result}
          </div>
        ))}
      </>
    );
  }

  return <></>;
};

export default Data;
