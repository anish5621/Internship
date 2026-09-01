import { forwardRef, useRef, useState } from 'react';


type CustomInputProps = {
  label: string;
  placeholder?: string;
};

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ label, placeholder }, ref) => {
    return (
      <label>
        {label}
        <input ref={ref} placeholder={placeholder} />
      </label>
    );
  }
);

export function ParentForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<number | null>(null);
  const [status, setStatus] = useState<string>('Idle');

  const handleFocus = () => {
    inputRef.current?.focus();
    setStatus('Focused instantly!');
  };

  const startDelayedFocus = () => {
    if (timerRef.current !== null) return;

    setStatus('Focusing in 2 seconds...');
    timerRef.current = window.setTimeout(() => {
      inputRef.current?.focus();
      setStatus('Focused via timer!');
      timerRef.current = null;
    }, 2000);
  };

  return (
    <div>
      <h2>useRef TypeScript Example</h2>

      <div>
        <CustomInput ref={inputRef} label="Username: " placeholder="Enter name" />
      </div>

      <div>
        <p><strong>Status:</strong> {status}</p>
      </div>

      <div>
        <button onClick={handleFocus}>Focus Instantly</button>
        <button onClick={startDelayedFocus}>Focus after 2s</button>
      </div>
    </div>
  );
}

export default ParentForm;