import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {Controller} from 'react-hook-form';
import styles from '../style/style';

const InputBox = ({
  name,
  control,
  placeholder,
  label = '',
  rules = {},
  isReq = true,
  textarea = false,
  lines = 2,
  bg = false,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: {onChange, onBlur, value, ref},
        fieldState: {error},
      }) => {
        return (
          <View>
            {label !== '' && (
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.label}>{label}</Text>
                {isReq ? (
                  <Text style={[styles.label, {color: 'red'}]}>*</Text>
                ) : null}
              </View>
            )}
            <TextInput
              style={[
                styles.inputBox,
                {
                  backgroundColor: bg ? bg : '#fff',
                  borderColor: error ? 'red' : '#000',
                  borderWidth: error ? 0.5 : 1,
                },
              ]}
              placeholder={placeholder}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              ref={ref}
              placeholderTextColor={'#c7c7c7'}
              multiline={textarea}
              numberOfLines={lines}
              textAlignVertical={textarea ? 'top' : 'center'}
            />
            {error && (
              <Text style={styles.errorText}>
                {error?.message || 'This Field Is Required*'}
              </Text>
            )}
          </View>
        );
      }}
    />
  );
};

export default InputBox;
