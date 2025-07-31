import { useGlobalStore } from '~/state/store';

export const useNavbarOpened = (): readonly [boolean, () => void] => {
    const navbarOpened = useGlobalStore((state) => state.navbarOpened);
    const toggleNavbarOpened = useGlobalStore((state) => state.toggleNavbarOpened);
    return [navbarOpened, toggleNavbarOpened];
};
