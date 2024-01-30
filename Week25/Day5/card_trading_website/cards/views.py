from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Card, User
from .serializers import CardSerializer, UserSerializer

class CardListView(APIView):
    def get(self, request):
        cards = Card.objects.all()
        serializer = CardSerializer(cards, many=True)
        return Response(serializer.data)
    
class CardDetailView(APIView):
  def get(self, request, card_id):
      card = Card.objects.get(id=card_id)
      serializer = CardSerializer(card)
      return Response(serializer.data)
  
class UserProfileView(APIView):
  def get(self, request, user_id):
      user = User.objects.get(id=user_id)
      serializer = UserSerializer(user)
      return Response(serializer.data)
  
class BuyCardView(APIView):
    def post(self, request, card_id, user_id):
            card = Card.objects.get(pk=card_id)
            user = User.objects.get(pk=user_id)

            if user.balance >= card.price:
                card.owner = user
                user.balance -= card.price

                card.save()
                user.save()

                card_serializer = CardSerializer(card)
                user_serializer = UserSerializer(user)

                return Response({
                    'card': card_serializer.data,
                    'user': user_serializer.data,
                    'message': 'Transaction successful.'
                })
            else:
                return Response({'error': 'Insufficient funds.'}, status=status.HTTP_400_BAD_REQUEST)


class SellCardView(APIView):
    def post(self, request, card_id, user_id):
            card = Card.objects.get(pk=card_id)
            user = User.objects.get(pk=user_id)

            if card.owner != user:
                return Response({'error': 'You do not own this card.'}, status=status.HTTP_403_FORBIDDEN)

            card.owner = None 
            user.balance += card.price  

            card.save()
            user.save()

            card_serializer = CardSerializer(card)
            user_serializer = UserSerializer(user)

            return Response({
                'card': card_serializer.data,
                'user': user_serializer.data,
                'message': 'Card successfully sold.'
            })