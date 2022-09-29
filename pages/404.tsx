import PageContainer from '../components/PageContainer';
import Card from '../components/Card';
import Result from '../components/Result';

const NotFountPage = () => {
  return (
    <PageContainer>
      <Card>
        <Result
          title={'404'}
          description={'您访问的资源不存在！'}
          icon={'icon-warning1'}
          color={'#ff4d4f'}
        />
      </Card>
    </PageContainer>
  );
};

export default NotFountPage;
