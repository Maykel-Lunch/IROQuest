export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border border-gray-300 bg-white text-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ' + 
                className
            }
        />
    );
}
