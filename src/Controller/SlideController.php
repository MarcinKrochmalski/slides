<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\Slide;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SlideController extends AbstractController
{
    /**
     * @Route("/", name="home_page")
     */
    public function index(EntityManagerInterface $entityManager): Response
    {
        
        $slideRepository = $entityManager->getRepository(Slide::class);
        $slides = $slideRepository->findBy(
            ['active' => true]
        );

        return $this->render('slide/index.html.twig', ['slides' => $this->prepareSlides($slides)]);

    }

    private function prepareSlides($slides){

        $slidesToWidget = [];
        foreach ($slides as $slide) {
            $photos = $slide->getPhoto();

            $photosToWidget = [];

            foreach ($photos as $photo) {
                $photosToWidget[] = [
                    "id" => $photo->getId(),
                    "src" => $photo->getSrc(),
                    "title" => $photo->getTitle(),
                    "alt" => $photo->getAlt(),
                ];
            }

            if(count($photosToWidget)){
                $slidesToWidget[] = [
                    "text" => [
                        "title" => $slide->getTitle(),
                        "description" => $slide->getDescription(),
                    ],
                    "photos" => $photosToWidget,
                    "textIndex" => $slide->getTextIndex(),
                    "activeIndex" => $slide->getActiveIndex(),

                ];
            }
        }

        return $slidesToWidget;

    }


}
