import type { ButtonProps as MantineButtonProps } from '@mantine/core';
import { Button as MantineButton } from '@mantine/core';

type ButtonProps = MantineButtonProps & { label: string; onClick: () => void };

export function Button(props: ButtonProps) {
    const { label, onClick, ...mantineProps }: ButtonProps = props;

    return (
        <MantineButton {...mantineProps} onClick={onClick}>
            {label}
        </MantineButton>
    );
}
