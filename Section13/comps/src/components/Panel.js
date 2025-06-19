
import classNames from 'classnames';

// Define a reusable Panel component
// Props:
// - children: the content to be rendered inside the panel
// - className: optional additional CSS classes provided by the parent component
// - ...rest: spread operator to pass through any other props (e.g., onClick, id)
function Panel({children, className, ...rest}) {
    // Combine default styling with any additional class names passed via props
    const finalClassNames = classNames(
        'border rounded p-3 shadow bg-white w-full',    // default panel styling
        className   // any extra styling provided externally                            
    );

    // Render a div with the computed class names and any other passed props
    return <div {...rest} className={finalClassNames}>
        {children}
    </div>
}

export default Panel;