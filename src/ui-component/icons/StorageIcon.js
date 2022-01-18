const StorageIcon = ({color}) => {
    return (
        <>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8.46582H20.25C20.4489 8.46582 20.6397 8.54484 20.7803 8.68549C20.921 8.82614 21 9.01691 21 9.21582V19.7158C21 19.9147 20.921 20.1055 20.7803 20.2462C20.6397 20.3868 20.4489 20.4658 20.25 20.4658H3.75C3.55127 20.4652 3.36084 20.386 3.22031 20.2455C3.07979 20.105 3.00058 19.9146 3 19.7158V10.7158" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.75 10.7158H3V6.96582C3 6.76691 3.07902 6.57614 3.21967 6.43549C3.36032 6.29484 3.55109 6.21582 3.75 6.21582H8.75C8.91228 6.21582 9.07018 6.26845 9.2 6.36582L12 8.46582L9.2 10.5658C9.07018 10.6632 8.91228 10.7158 8.75 10.7158Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

        </>
    );
}

export default StorageIcon;