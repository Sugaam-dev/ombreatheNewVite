import '../Styles/why.css'
const Why = () => {
    const changeColor = () => {
        // Fetch the h1 element using document.querySelector
        const h1Element = document.querySelector('h1');
    
        // Change the color of the h1 element
        if (h1Element) {
          h1Element.style.color = 'purple'; // Change color to purple
        }
      };
    
      return (
        <div>
          {/* h1 tag that will change color */}
          <h1>This is a Heading</h1>
          
          {/* Button to trigger the color change */}
          <button onClick={changeColor}>Change Color</button>
        </div>
      );
    };

 
export default Why;