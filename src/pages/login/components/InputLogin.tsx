interface IInputLoginProps {
    label: string;
    type?: string;
    value: string;
    onChange: (newValue: string) => void;
    onPressEnter?: () => void;
}

export const InputLogin: React.FC<IInputLoginProps> = (props) => {
    return (
        <label>
            <span>{props.label}</span>
            <input  
                value={props.value}
                type={props.type}
                onChange={ event => props.onChange(event.target.value) }
                onKeyDown={ event => event.key === 'Enter' 
                    ? props.onPressEnter && props.onPressEnter() 
                    : undefined}
            />
        </label>
    )
}