import { Link } from "react-router-dom";

const ButtonGradient = ({className,children,to="/"}) =>{
  const classes = "rounded-xl btn bg-btn-gradient px-8  text-white border "+ className
  if(to){
    return(
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }else{
    <button  className={classes}>
      {children}
    </button>
  }
}

export default ButtonGradient;