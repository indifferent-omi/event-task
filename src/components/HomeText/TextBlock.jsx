export const HomeTextBlock = ({children,className})=>{
  return(
    <div className={className}>
    <h1 className="mb-4 text-primary">Imagine if
    <span className="block text-size-inherit text-gradient-purple-pink leading-inherit">Snapchat</span>
    had events.</h1>
    <p className={`text-gray mb-12`}>Easily host and share events with your friends across any social media.</p>
    {children}
  </div>
  )
}
export default HomeTextBlock 