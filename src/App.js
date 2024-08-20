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

function App() {
      return (
            <BrowserRouter>
                  <div className='App-wrapper'>
                        <Header />
                        <Navbar />
                        <Footer />
                        <div className='app-wrapper-content'>
                              <Routes>
                                    <Route
                                          exact
                                          path='profile/*'
                                          element={<Profile />}
                                    />
                                    <Route
                                          exact
                                          path='dialogs/*'
                                          element={<Dialogs />}
                                    />
                                    <Route
                                          exact
                                          path='news/*'
                                          element={<News />}
                                    />
                                    <Route
                                          exact
                                          path='music/*'
                                          element={<Music />}
                                    />
                                    <Route
                                          exact
                                          path='settings/*'
                                          element={<Settings />}
                                    />
                              </Routes>
                        </div>
                  </div>
            </BrowserRouter>
      );
}

export default App;
