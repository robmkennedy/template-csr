import { AspectRatio, Card, Image, Tooltip } from '@mantine/core';
import styles from './ImageCard.module.css';

type ImageCardProps = {
    img: string;
    alt: string;
    ratio?: number;
    onClick?: () => void;
};

/**
 * A text element that can be shared between the pages and used as the page title.
 */
export function ImageCard({ img, alt, ratio = 1, onClick = () => {} }: ImageCardProps) {
    return (
        <Tooltip label={alt}>
        <Card className={styles.hover} onClick={onClick} shadow='sm' padding='lg' radius='md' withBorder>
            <Card.Section>
                <AspectRatio ratio={ratio}>
                    <Image
                        src={img}
                        style={{ objectPosition: 'top' }}
                        alt={alt}
                        fallbackSrc='https://placehold.co/400?text=No+Image'
                    />
                </AspectRatio>
            </Card.Section>
        </Card>
        </Tooltip>
    );
}
