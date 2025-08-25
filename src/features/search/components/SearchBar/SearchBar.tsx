import { type ChangeEvent, type KeyboardEvent, useState } from 'react';
import { Button, CloseButton, Flex, TextInput } from '@mantine/core';
import { useSearchTerm } from '~features/search/hooks/searchHooks';
import { useTranslation } from 'react-i18next';
import styles from './SearchBar.module.css';

/**
 * An input group component used to provide a search bar for the user. The onSearch property
 * is an event handler that is called with the string search value when the Search button
 * is clicked.
 */
export function SearchBar() {
    const { t } = useTranslation();
    const [inputValue, setInputValue] = useState<string>('');
    const setSearchTerm = useSearchTerm()[1];

    const handleSearch = () => {
        if (inputValue) {
            setSearchTerm(inputValue);
        }
    };

    const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleClear = () => {
        setInputValue('');
    };

    return (
        <Flex component='search' w={{ base: '100%', sm: 500 }} gap={0}>
            <TextInput
                aria-label={t('search.input.label')}
                placeholder={t('search.input.placeholder')}
                classNames={{ root: styles.root }}
                value={inputValue}
                onKeyUp={handleKeyUp}
                onChange={handleChange}
                rightSectionPointerEvents='all'
                rightSection={inputValue && <CloseButton aria-label={t('search.input.clear')} onClick={handleClear} />}
            />
            <Button onClick={handleSearch} disabled={!inputValue}>
                {t('search.input.button')}
            </Button>
        </Flex>
    );
}
