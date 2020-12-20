import { ToastProvider, useToasts } from 'react-toast-notifications';

const Header = () => {

    const FormWithToasts = () => {
        const { addToast } = useToasts()
      
        const onSubmit = async value => {
          const { error } = await dataPersistenceLayer(value)
      
          if (error) {
            addToast(error.message, { appearance: 'error' })
          } else {
            addToast('Saved Successfully', { appearance: 'success' })
          }
        }
      
        return <form onSubmit={onSubmit}>...</form>
      }
    return (
        <div></div>
    );
  }
  
  export default Header;