import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const pad = (n) => String(n).padStart(2, '0')
  const hours = pad(time.getHours())
  const minutes = pad(time.getMinutes())
  const seconds = pad(time.getSeconds())

  const days = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy']
  const dayName = days[time.getDay()]
  const dateStr = `${dayName}, ngày ${time.getDate()} tháng ${time.getMonth() + 1} năm ${time.getFullYear()}`

  return (
    <div className="container">
      <h1 className="greeting">Chào bạn 👋</h1>
      <div className="clock">
        <span className="digits">{hours}</span>
        <span className="colon">:</span>
        <span className="digits">{minutes}</span>
        <span className="colon">:</span>
        <span className="digits seconds">{seconds}</span>
      </div>
      <p className="date">{dateStr}</p>
    </div>
  )
}

export default App
