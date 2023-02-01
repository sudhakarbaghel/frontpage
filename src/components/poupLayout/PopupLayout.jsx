import "./popLayout.scss"

export default function PopupLayout(props) {
  console.log("first")
  return (
      <div>
              <div className="popup-background">
                  <div className="popup-content">
                     {props.child}
                  </div>
              </div>
      </div>
  )
}
