import './search-box.styles.css'

interface ISearchBoxProps {
    placeholder: string;
    className: string;
}

interface ISearchBoxProps {
    onChangeHandler: (a: string) => void
}

const SearchBox = ({ onChangeHandler, placeholder, className }: ISearchBoxProps) => (
    <input
        type="search"
        className={`search-box ${className}`}
        placeholder={placeholder}
        onChange={e => onChangeHandler(e)}
    />
)

export default SearchBox