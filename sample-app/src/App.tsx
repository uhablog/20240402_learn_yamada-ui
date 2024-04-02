import { Button, useLoading, useNotice, Wrap } from '@yamada-ui/react';

function App() {
  const { screen, page, background } = useLoading();
  const notice = useNotice();

  const wait = async (time: number) => {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  const onLoadingScreen = async () => {
    try {
      screen.start()
  
      await wait(3000)
    } finally {
      screen.finish()
    }
  }
  
  const onLoadingPage = async () => {
    try {
      page.start()
  
      await wait(3000)
    } finally {
      page.finish()
    }
  }
  
  const onLoadingBackground = async () => {
    try {
      background.start()
  
      await wait(3000)
    } finally {
      background.finish()
    }
  }

  return (
    <Wrap gap="md">
      <Button onClick={onLoadingScreen}>Start screen loading</Button>
      <Button onClick={onLoadingPage}>Start page loading</Button>
      <Button onClick={onLoadingBackground}>Start background loading</Button>
      <Button
        onClick={() =>
          notice({
            title: "Notification",
            description: "This is description.",
          })
        }
      >
        Show notification
      </Button>
    </Wrap>
  );
}

export default App;