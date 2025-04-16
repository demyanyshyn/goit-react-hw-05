import { Field, Form, Formik } from 'formik';
import s from './SearchBar.module.css';
import { useSearchParams } from 'react-router-dom';

const SearchBar = ({ handleChangeSearchString }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';

    const initialValues = {
        search: query ?? '',
    };

    const handleSubmit = values => {
        handleChangeSearchString(values.search);
    };
    return (
        <div className={s.searchWrapper}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <Field name="search" />
                    <button type="submit">Search</button>
                </Form>
            </Formik>
        </div>
    );
};

export default SearchBar;
