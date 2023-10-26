import { useEffect, useState } from "react"
import './index.scss'
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, addToNum } from "./store/modules/counterStore"
import { fetchChannelList } from "./store/modules/channelStore"

const list = [
  {
    rpid: 3,
    user: {
      uid: '111',
      avatar: 'img',
      uname: 'bob'
    },
    content: 'comment',
    ctime: '10-18 08:15',
    like: 88
  }
]

function App() {
  const { count } = useSelector(state => state.counter)
  const { channelList } = useSelector(state => state.channel)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchChannelList())
  }, [dispatch])
  const [commentList, setCommentList] = useState(list)
  return (
    <div className="App">
      {commentList.map(item => (
        <div key={item.rpid} className="reply-item">
          <div>
            {item.user.avatar}
          </div>
          <div>
            {item.user.uname}
          </div>
        </div>
      ))}
      <button onClick={() => dispatch(decrement())}>-</button>
        {count}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(addToNum(10))}>Add to 10</button>
      <ul>
        {channelList.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
