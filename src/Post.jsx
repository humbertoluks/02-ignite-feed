export default function App(props) {
    return (    
      <div>
        <strong>
          {props.author}
        </strong>
        <p>{props.content}</p>
      </div>
    )
  }
  
  