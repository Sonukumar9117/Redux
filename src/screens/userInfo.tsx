import { Button, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from '../store/userAction';
import { RootState } from '../store/stores';
type WelcomeMsgProp = {
  userName: string;
};
function WelcomeMsg({ userName }: WelcomeMsgProp) {
  return (
    <View>
      <Text> {userName + ''}</Text>
    </View>
  );
}

export default function UserInfo() {
  const { userName, isSignedIn } = useSelector((state:RootState) => state.userData);
  const dispatch=useDispatch();
  return (
    <View style={styles.container}>
      {isSignedIn ? (
        <View>
          <WelcomeMsg userName={userName} />{' '}
          <Button title="Change name" onPress={() => {dispatch(changeName("Ritik"))}}/>
        </View>
      ) : (
        <Text>Plz Login First</Text>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
