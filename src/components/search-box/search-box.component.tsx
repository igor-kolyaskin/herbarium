// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ChangeEvent, ChangeEventHandler } from 'react'
import './search-box.styles.css'

// interface ISearchBoxProps {
//     placeholder: string;
//     className: string;
// }

// interface ISearchBoxProps {
//     onChangeHandler: (a: string) => void
// }

type ISearchBoxProps = {
    placeholder: string
    className: string
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
    // onChangeHandler: ChangeEventHandler<HTMLInputElement>
}

const SearchBox = ({ onChangeHandler, placeholder, className }: ISearchBoxProps) => (
    <input
        type="search"
        className={`search-box ${className}`}
        placeholder={placeholder}
        onChange={onChangeHandler}
    />
)

export default SearchBox