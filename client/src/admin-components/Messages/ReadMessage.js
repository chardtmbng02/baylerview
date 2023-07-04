import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const ReadMessage = () => {
  const { id } = useParams(); // Get the account ID from the URL parameter
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const messagesResponse = await axios.get(
          `https://baylerview-api.onrender.com/api/contacts/${id}`
        );
        setMessages(messagesResponse.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    
    fetchData();
  }, [id]);

console.log(messages);
const usermessage = messages.message;

  const handleConfirmUpdate = async () => {
    try {
      await axios.put(
        `https://baylerview-api.onrender.com/api/contacts/${id}`,
        {
          message_status: "Read"
        }
      );
      navigate('/admin/messages');
    } catch (error) {
      console.log(error);
    }
    navigate('/admin/messages');
  };

  return (
    <>
      <div className="fixed inset-0 z-40 min-h-full overflow-y-auto overflow-x-hidden transition flex items-center bg-gray-400">
        <div
          aria-hidden="true"
          className="fixed inset-0 w-full h-full bg-black/50 cursor-pointer"
        ></div>

        <div className="relative w-full cursor-pointer pointer-events-none transition my-auto p-4">
          <div className="w-full py-2 bg-white cursor-default pointer-events-auto relative rounded-xl mx-auto max-w-sm">
          

            <div className="space-y-2 p-2">
              <div className="p-4 space-y-2 text-center">
                <h2
                  className="text-xl font-bold tracking-tight"
                  id="page-action.heading"
                >
                  Read Message from <br /> {messages.name}
                </h2>

                <p className="text-gray-500">
                  {usermessage}
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <div aria-hidden="true" className="border-t px-2"></div>

              <div className="px-6 py-2">
                <div className="grid gap-2 grid-cols-[repeat(auto-fit,minmax(0,1fr))]">

                  <button
                    type="submit"
                    onClick={handleConfirmUpdate}
                    className="hover:text-black inline-flex items-center justify-center py-1 gap-1 font-medium rounded-lg border transition-colors outline-none px-4 text-sm text-white shadow focus:ring-white border-transparent bg-green-600 hover:bg-green-500"
                  >
                    <span className="flex items-center gap-1">
                      <span className="">OK</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
