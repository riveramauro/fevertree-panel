function Slide({children, backgroundImage}) {
  
  const containerCss = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover'
  }

  return (
    <div style={containerCss} className="h-full flex justify-center align-middle relative overflow-hidden">
      {children}
    </div>
  );
}

export default Slide;
