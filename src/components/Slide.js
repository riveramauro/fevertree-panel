function Slide({children, backgroundImage}) {
  
  const containerCss = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover'
  }

  return (
    <div style={containerCss} className="h-full flex justify-center align-middle relative overflow-hidden animate__animated animate__fadeIn animate__slow">
      {children}
    </div>
  );
}

export default Slide;
