import PageContainer from '../components/PageContainer';
import Card from '../components/Card';
import Result from '../components/Result';

const NotFountPage = () => {
  return (
    <PageContainer>
      <Card>
        <Result
          title={'500'}
          description={'服务器发生错误，请稍后重试！'}
          icon={'icon-warning'}
          color={'#faad14'}
        />
      </Card>
    </PageContainer>
  );
};

export default NotFountPage;
