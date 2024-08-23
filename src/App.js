import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { Dialogs } from './components/Dialogs/Dialogs';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';

function App(props) {
      return (
            <BrowserRouter>
                  <div className='App-wrapper'>
                        <Header />
                        <Navbar />
                        <Footer />
                        <div className='app-wrapper-content'>
                              <Routes>
                                    <Route
                                          path='/profile/*'
                                          element={
                                                <Profile posts={props.posts} />
                                          }
                                    />
                                    <Route
                                          path='/dialogs/*'
                                          element={
                                                <Dialogs
                                                      dialogsData={
                                                            props.dialogsData
                                                      }
                                                      messagesData={
                                                            props.messagesData
                                                      }
                                                />
                                          }
                                    />
                                    <Route path='/news/*' element={<News />} />
                                    <Route
                                          path='/music/*'
                                          element={<Music />}
                                    />
                                    <Route
                                          path='/settings/*'
                                          element={<Settings />}
                                    />
                              </Routes>
                        </div>
                  </div>
            </BrowserRouter>
      );
}

export default App;
