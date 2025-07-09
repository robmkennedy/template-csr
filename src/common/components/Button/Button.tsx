import type { Variant } from 'common/types/common.types.ts';
import styles from './Button.module.css';

type ButtonProps = {
    label: string;
    onClick: () => void;
    variant?: Variant;
};

export function Button(props: ButtonProps) {
    const { label, variant = 'primary', onClick }: ButtonProps = props;

    return (
        <button className={`${styles.btn} ${styles[variant]}`} onClick={onClick}>
            {label}
        </button>
    );
}
