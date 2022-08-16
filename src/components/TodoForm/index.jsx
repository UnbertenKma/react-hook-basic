import React , {useState} from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null,
}

function TodoForm(props) {
    const { onSubmit } = props;

    const [value, setValue] = useState('');

    //khi input thay đổi cập nhật lại state
    function handleValueChange(e) {
        console.log(e.target.value)
        setValue(e.target.value)
    }

    //khi an Enter
    function handleSubmit(e) {
        //Prevent reloading browser
        e.preventDefault();

        if( !onSubmit) return;

        const formValue = {
            title: value,
        }

        onSubmit(formValue)

        //reset form
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text' 
                value={value} 
                onChange={handleValueChange} 
            />
        </form>
    );
}

export default TodoForm;