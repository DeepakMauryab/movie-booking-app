import {Text, TouchableOpacity} from 'react-native';
import styles from '../style/style';

const ButtonComponent = ({title, onSubmit, disabled}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[styles.button, {opacity: disabled ? 0.5 : 1}]}
      disabled={disabled}
      onPress={onSubmit}>
      {/* {active ? (
        <Lottie
          source={require('../Assets/lottie/bolljump.json')}
          autoPlay
          style={style.loginLottie}
        />
      ) : ( */}
      <Text style={styles.btnText}>{title}</Text>
      {/* // )} */}
    </TouchableOpacity>
  );
};

export default ButtonComponent;
