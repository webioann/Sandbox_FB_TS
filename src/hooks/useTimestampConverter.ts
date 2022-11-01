import { useState, useEffect } from 'react'

export const useTimestampConverter = (timestamp: number) => {

    const [time, setTime] = useState<string>('')

    useEffect(() => {
        let date = new Date(timestamp)
        let day;
        let hours;
        let minute;
        let raw_day = date.getDate()
        let raw_hours = date.getHours()
        let raw_minute = date.getMinutes()
        let month = date.getMonth() + 1
        raw_day < 10 ? day=`0${raw_day}` : day = raw_day
        raw_hours < 10 ? hours=`0${raw_hours}` : hours = raw_hours
        raw_minute < 10 ? minute=`0${raw_minute}` : minute = raw_minute
        setTime(`${hours} : ${minute}  ${day}.${month}`)
    }, [])

    return time
};
